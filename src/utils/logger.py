"""
Sistema de Logging Centralizado.

Este módulo configura un logger robusto con múltiples manejadores (handlers) para salida
por consola y persistencia en archivos rotativos, segmentando la información por 
niveles de severidad (INFO, DEBUG, ERROR).

Objetivos clave:
1. Asegurar la trazabilidad de las operaciones en archivos de log organizados.
2. Facilitar la depuración mediante logs de depuración detallados (debug.log).
3. Centralizar el reporte de errores críticos en un archivo dedicado (error.log).
4. Implementar rotación de archivos para optimizar el uso de espacio en disco.
"""
import logging
import os
import sys
from logging.handlers import RotatingFileHandler

# Definir la ruta de los logs (src/temp/logs)
# __file__ is src/utils/logger.py
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) # src/
LOG_DIR = os.path.join(BASE_DIR, 'temp', 'logs')

# Asegurar que la carpeta de logs existe
os.makedirs(LOG_DIR, exist_ok=True)

class ExactLevelFilter(logging.Filter):
    """
    Filtra log records para permitir solo niveles específicos.
    """
    def __init__(self, level):
        self.level = level
    
    def filter(self, record):
        return record.levelno == self.level

def setup_logger():
    """
    Configura y retorna la instancia global del logger con múltiples destinos.
    
    Objetivo:
    - Inicializar los manejadores para consola y archivos rotativos.
    - Aplicar filtros de nivel exacto para segmentar logs de INFO y DEBUG.
    - Establecer formatos consistentes para todas las entradas de bitácora.
    """
    logger = logging.getLogger('core-identity')
    
    # El nivel base lo ponemos en DEBUG para capturar todo y filtrar en los handlers
    logger.setLevel(logging.DEBUG)
    # Evitar propagación si se usara en un entorno con root logger ya configurado
    logger.propagate = False 

    # Formato de los logs
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    # 1. Handler para consola (Stdout)
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formatter)
    console_handler.setLevel(logging.INFO) # En consola mostramos INFO para arriba por defecto
    logger.addHandler(console_handler)

    # 2. Handler para app.log (General / "Otras cosas" - Mantenemos INFO+)
    app_log_file = os.path.join(LOG_DIR, 'app.log')
    app_handler = RotatingFileHandler(app_log_file, maxBytes=10*1024*1024, backupCount=5, encoding='utf-8')
    app_handler.setFormatter(formatter)
    app_handler.setLevel(logging.INFO)
    logger.addHandler(app_handler)

    # 3. Handler para error.log (WARN y ERROR)
    error_log_file = os.path.join(LOG_DIR, 'error.log')
    error_handler = RotatingFileHandler(error_log_file, maxBytes=5*1024*1024, backupCount=3, encoding='utf-8')
    error_handler.setFormatter(formatter)
    error_handler.setLevel(logging.WARNING) # Captura WARNING, ERROR, CRITICAL
    logger.addHandler(error_handler)

    # 4. Handler para info.log (Solo INFO)
    info_log_file = os.path.join(LOG_DIR, 'info.log')
    info_handler = RotatingFileHandler(info_log_file, maxBytes=5*1024*1024, backupCount=3, encoding='utf-8')
    info_handler.setFormatter(formatter)
    info_handler.setLevel(logging.INFO)
    info_handler.addFilter(ExactLevelFilter(logging.INFO)) # Solo INFO
    logger.addHandler(info_handler)

    # 5. Handler para debug.log (Solo DEBUG)
    debug_log_file = os.path.join(LOG_DIR, 'debug.log')
    debug_handler = RotatingFileHandler(debug_log_file, maxBytes=5*1024*1024, backupCount=3, encoding='utf-8')
    debug_handler.setFormatter(formatter)
    debug_handler.setLevel(logging.DEBUG)
    debug_handler.addFilter(ExactLevelFilter(logging.DEBUG)) # Solo DEBUG
    logger.addHandler(debug_handler)

    return logger

# Instancia global del logger para importar fácilmente
logger = setup_logger()
logger.info("Sistema de logging inicializado")
