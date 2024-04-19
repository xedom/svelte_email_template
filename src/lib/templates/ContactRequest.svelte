<script lang="ts">
	import { Html, Head, Button, Container, Column, Section, Heading, Hr, Img, Link, Preview, Text } from 'svelte-email';
</script>

<Html lang="en">
	<Head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Account Creation</title>
		<style type="text/css">
			body {
				margin: 0;
				padding: 0;
				background-color: #313131;
				font-family: Arial, sans-serif;
				font-size: 14px;
				line-height: 1.6;
				color: #333;
			}

			table {
				border-spacing: 0;
			}

			td {
				padding: 0;
			}

			img {
				border: 0;
			}

			.wrapper {
				width: 100%;
				table-layout: fixed;
				background-color: #979797;
				padding: 20px 0;
			}

			.main {
				background-color: #ffffff;
				margin: 0 auto;
				width: 100%;
				max-width: 600px;
				border-spacing: 0;
				font-family: sans-serif;
				color: #151515;
			}
		</style>
	</Head>

	<center class="wrapper">
		<table class="main" width="100%">
			<tr>
				<td height="8" style="background-color: #151515;"></td>
			</tr>
			<!-- HEADER -->
			<tr>
				<td>
					<table width="100%">
						<tr>
							<td class="cols-2">
								<!-- LOGO -->
								<table class="col">
									<tr>
										<td>
											<a href="#fe">
												<img src="http://xed.im/img/sid.png" alt="logo" width="190" title="logo" />
											</a>
										</td>
									</tr>
								</table>
								<!-- SOCIALS -->
								<table class="col">
									<tr>
										<td>
											<p style="font-size: 12px; color: #151515; text-align: right;">
												<a href={'https://www.facebook.com/gesuapp'} style="color: #151515;"> Facebook </a>
												<span style="padding: 0 10px;">|</span>
												<a href="https://www.instagram.com/gesuapp" style="color: #151515;"> Instagram </a>
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</center>
</Html>
