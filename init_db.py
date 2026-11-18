import sqlite3
import shutil
import os

db_dir = r'C:\Users\Devil__Zero\.gemini\antigravity\scratch\blog_primer_t\server\db'
src_db = os.path.join(db_dir, 'blog.example.sqlite3')
dst_db = os.path.join(db_dir, 'blog.sqlite3')

if not os.path.exists(dst_db):
    shutil.copy2(src_db, dst_db)

conn = sqlite3.connect(dst_db)
cur = conn.cursor()
cur.execute('DELETE FROM admin')
cur.execute("INSERT INTO admin (id, account, password, token) VALUES (?, ?, ?, ?)", (1, 'admin', '123456', ''))
conn.commit()
print('Initialized local blog.sqlite3 with admin / 123456')
res = cur.execute('SELECT * FROM admin').fetchall()
print('Admin table:', res)
