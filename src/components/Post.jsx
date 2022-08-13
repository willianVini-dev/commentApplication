import styles from './Post.module.css'
export function Post(props) {
	return (
		<article className={styles.post}>
			<header>
				
				<div className={styles.author}>
					<img className={styles.avatar} src="https://github.com/willianVini-dev.png"/>
					<div className={styles.authorInfo}>
						<strong>Willian Vinicius</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title="11 de maio as 08:13" dateTime="2022-05-11 08:13:50">Publicado há 1h</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
				<p><a href=''>👉 jane.design/doctorcare</a></p>
				<p>
					<a href=''>#novoprojeto</a>{' '}
					<a href=''>#nlw</a>{' '} 
					<a>#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixa seu feedback</strong>
				<textarea 
					placeholder='Deixa um comentario'
				/>

				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>
		</article>
	)
}
