import request from 'supertest';
import app from './app'; 


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibm9tYnJlIjoiSm9zZSIsImlhdCI6MTcyODA2MjIwNiwiZXhwIjoxNzI4MDYyNTA2fQ.O8UlH8cDQBchKVnQU75jMp_cH67WG5NR-rvGNwvDsGI';

describe('Pruebas de Canal', () => {
 
  it('Debería obtener todos los canales', async () => {
    const res = await request(app)
      .get('/api/canales')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Test de la ruta POST /api/canales
  it('Debería crear un nuevo canal', async () => {
    const res = await request(app)
      .post('/api/canales')
      .set('Authorization', `Bearer ${token}`) // Añadir token JWT
      .send({
        nombre: 'Canal de Prueba',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('nombre', 'Canal de Prueba');
  });

  // Test de la ruta PATCH /api/canales/:id
  it('Debería actualizar un canal existente', async () => {
    const res = await request(app)
      .patch('/api/canales/1')
      .set('Authorization', `Bearer ${token}`) // Añadir token JWT
      .send({
        nombre: 'Canal Actualizado',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('nombre', 'Canal Actualizado');
  });

  // Test de la ruta DELETE /api/canales/:id
  it('Debería eliminar un canal', async () => {
    const res = await request(app)
      .delete('/api/canales/1')
      .set('Authorization', `Bearer ${token}`); // Añadir token JWT
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Canal eliminado');
  });
});
