<template>
	<div class="dragFile"> 
		<div class="container">
			<svg width="130" height="162" viewBox="0 0 130 162" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M5.22894 5.22894C8.57697 1.8809 13.1179 0 17.8527 0H77.0727C81.7374 0.00058061 86.2168 1.82685 89.552 5.08802L124.332 39.1001C124.332 39.1002 124.332 39.1 124.332 39.1001C126.032 40.7625 127.384 42.7483 128.307 44.9401C129.23 47.1321 129.705 49.4864 129.705 51.8648V143.186C129.705 147.921 127.824 152.462 124.476 155.81C121.128 159.158 116.588 161.039 111.853 161.039H17.8527C13.1179 161.039 8.57697 159.158 5.22894 155.81C1.8809 152.462 0 147.921 0 143.186V17.8527C0 13.1179 1.8809 8.57697 5.22894 5.22894ZM17.8527 4.37209C14.2774 4.37209 10.8486 5.79237 8.32047 8.32047C5.79237 10.8486 4.37209 14.2774 4.37209 17.8527V143.186C4.37209 146.761 5.79237 150.19 8.32047 152.718C10.8486 155.246 14.2774 156.667 17.8527 156.667H111.853C115.428 156.667 118.857 155.246 121.385 152.718C123.913 150.19 125.333 146.761 125.333 143.186V51.8653C125.333 51.8652 125.333 51.8654 125.333 51.8653C125.333 50.0695 124.974 48.2916 124.277 46.6365C123.58 44.9813 122.56 43.482 121.276 42.2267L86.4954 8.21407C86.4953 8.21403 86.4954 8.2141 86.4954 8.21407C83.977 5.75168 80.5948 4.3726 77.0727 4.37209C77.0726 4.37209 77.0728 4.37209 77.0727 4.37209H17.8527Z" fill="white"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M78.3334 33.5194V2.18604H82.7055V33.5194C82.7055 37.0947 84.1257 40.5235 86.6539 43.0516C89.182 45.5797 92.6108 47 96.1861 47H127.519V51.3721H96.1861C91.4513 51.3721 86.9103 49.4912 83.5623 46.1431C80.2143 42.7951 78.3334 38.2542 78.3334 33.5194Z" fill="white"/>
			<rect width="51.8635" height="6.22363" rx="3.11181" transform="matrix(1 -5.05762e-07 -5.05762e-07 1 36.6498 89.7224)" fill="white"/>
			<rect width="51.8635" height="6.22363" rx="3.11181" transform="matrix(-5.05762e-07 1 -1 5.05762e-07 66.8655 66.9025)" fill="white"/>
			</svg>
		</div>
		<p>Drag File Here</p>
	</div>
</template>

<script>
export default {
  name: 'DragFile'
}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
	.dragFile{
		height: 600px;
		width: 800px;
		display: flex;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		background-color: #003265;
		flex-direction: column;
	}
	.container{
		height: 400px;
		width: 400px;
		border:4px dashed white;
		border-radius: 58px;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}
	svg > path {
		fill: white;
	}
	p {
		margin-top:2rem;
		color: white;
		font-size: 24px;
		font-family: 'Source Sans Pro', sans-serif;
	}
</style>
