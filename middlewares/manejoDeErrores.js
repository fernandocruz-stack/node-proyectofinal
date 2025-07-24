
export function manejoDeErrores(err, req, res, next) {
  console.error('💥 Error detectado:', err.stack || err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Error interno del servidor',
  });
}
