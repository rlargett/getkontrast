import { h, Component } from 'preact';
// import Siema from 'siema';
// import CSSTransitionGroup from 'preact-css-transition-group';

export default class Home extends Component {
	state = {
		subscribe: false,
		slide: 1,	//Pilih video
	}

	setSlide = e => {
		this.setState({slide: e});
	}

	render({}, { slide }) {
		return (
			<main class="px-4">
				<TopBar />
				<Headline />
				<Demo slide={slide} getSlide={this.setSlide} />
				<BuySection />
				<StoreSection />
				{ this.renderForm() }
			</main>
		)
	}

	renderForm() {
		let state = this.state;
		return (
				<div class="bg-black text-white max-w-xl py-8 -mx-4 sm:mx-auto">
				{/*<div class="bg-black text-white max-w-xl py-8 mb-10 -mx-4 sm:mx-auto">*/}
					<div class="px-4 sm:px-10">
						<h1 class="mt-0 text-red-light text-3xl font-semibold">You Can Make This App Better</h1>
						<p class="text-xl">I worked hard to make this app possible and better. However, I believe there still are rooms for improvement. Together we can improve this app. Whether you want a feature, found a bug, or just saying hi, I'd love to hear your feedback.😄</p>

						<form class="w-full mt-16" action="https://getsimpleform.com/messages?form_api_token=bb153a91ad0e800f29406eff5025f997" method="post">
							{/*<input type='hidden' name='redirect_to' value='/' />*/}
							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="name">
										Name
									</label>
									<input class="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										required
										id="name"
										name="name"
										type="text"
										placeholder="Your Name" />
								</div>
								<div class="w-full md:w-1/2 px-3 mb-6">
									<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="email">
										Email
									</label>
									<input class="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
										id="email"
										name="email"
										required={state.subscribe&&true}
										placeholder="Email" 
										pattern="\S+@\S+\.\S+"
										type="email" />

									<label for="contact">
										<input type="hidden" name="contact" value="No" />
										<input class="mr-2 leading-tight"
											type="checkbox" 
											name="contact"
											value="Yes"
											onchange={e => this.setState({subscribe: !state.subscribe})}
										/>
										<span class="text-sm italic">
											Let me know if you release new product
										</span>
									</label>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-full px-3">
									<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="message">
										Message
									</label>
									<textarea class="min-h-32 appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
										required
										id="message"
										name="message"
										type="text" />
								</div>
							</div>

							<div class="w-full text-right">
								<button
									type='submit'
									class={`
							irony-button bg-red-light hover:bg-white text-white hover:text-red-light font-bold
							py-4 px-4 border border-solid border-transparent hover:border-red-light rounded shadow hover:shadow-lg
							outline-none cursor-pointer
							`}>
							<svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
							<span>Submit</span>
						</button>
					</div>
				</form>

			</div>
		</div>
		)
	}
}

const TopBar = () => (
	<div class="flex h-2 shadow">
		<div class="w-1/6 bg-red rounded-l"></div>
		<div class="w-1/6 bg-orange"></div>
		<div class="w-1/6 bg-yellow"></div>
		<div class="w-1/6 bg-green"></div>
		<div class="w-1/6 bg-teal"></div>
		<div class="w-1/6 bg-blue rounded-r"></div>
	</div>
)

const Headline = () => (
	<div class="flex flex-col max-w-xl mx-auto justify-center items-center text-center pt-12 text-xl">
		<h1 class="text-4xl m-0 mb-6">
			<span class="inline-flex justify-center items-center w-24 h-24 mr-1 text-5rem bg-black text-grey-lighter">K</span>
			<span>ontrast</span>
		</h1>
		<p>Quickly check and adjust contrast in realtime in your browser to meet the standards of WCAG 2.0 (Web Content Accessibility Guidelines).</p>
	</div>
)

const Demo = ({ slide, getSlide }) => (
	<div class="relative max-w-xl w-full mx-auto mt-8 mb-12">
		<div class="shadow-lg">
			<img class="w-full" src="/mockup.png" alt="mockup"/>
			{ slide==1? (
				<div>
					<div id="player">
						<video class="w-full rounded-b"
							autoplay
							controls
							controlsList="nodownload"
							loop
							muted
							preload="metadata"
							src="/kontrast-demo.mp4" type="video/mp4"
						> Sorry, your browser doesn't support embedded videos.
						</video>
					</div>
				</div>
			):(
				<div>
					<div class="responsive-iframe-container">
						<iframe class="rounded-b" src="https://www.youtube.com/embed/FcEyCwNmcfU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			) }
		</div>
		<div class="mt-4 text-2xl text-red-light text-center">
			<span class="cursor-pointer mr-2" onclick={e => getSlide(1)}>
				<BulletPoint on={slide==1} />
			</span>
			<span class="cursor-pointer" onclick={e => getSlide(2)} >
				<BulletPoint on={slide==2} />
			</span>
		</div>
	</div>
)

const BuySection = () => (
	<div class="flex justify-center mb-8">
		<a class={`
		irony-button text-lg no-underline bg-red-light hover:bg-white text-white hover:text-red-light font-bold
					py-4 px-4 border border-solid border-grey-light hover:border-red-light rounded shadow hover:shadow-lg
					outline-none cursor-pointer
					`} 
					href="https://gum.co/kontrast" target="_blank">
					<svg class="w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
					<span>Buy for $4.99</span>
				</a>
			</div>
)

const StoreSection = () => ( 
	<div class="text-center mb-8">
		<h2>or try the free version:</h2>
		<a href="https://chrome.google.com/webstore/detail/haphaaenepedkjngghandlmhfillnhjk/" target="_blank">
			<img class="zoom w-16 h-16 mr-8" src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="1 1 176 176"><defs><circle id="a" cy="96" cx="96" r="88"/></defs><clipPath id="b"><use width="100%" overflow="visible" xlink:href="%23a" height="100%"/></clipPath><g transform="translate(-7 -7)" clip-path="url(%23b)"><path d="M21.97 8v108h39.39L96 56h88V8z" fill="%23db4437"/><linearGradient id="c" y2="44.354" gradientUnits="userSpaceOnUse" y1="75.021" x2="81.837" x1="29.337"><stop stop-color="%23A52714" stop-opacity=".6" offset="0"/><stop stop-color="%23A52714" stop-opacity="0" offset=".66"/></linearGradient><path d="M21.97 8v108h39.39L96 56h88V8z" fill="url(%23c)"/></g><path clip-path="url(%23b)" fill-opacity=".15" d="M62.31 115.65L22.48 47.34l-.58 1 39.54 67.8z" transform="translate(-7 -7)" fill="%233e2723"/><g transform="translate(-7 -7)" clip-path="url(%23b)"><path d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z" fill="%230f9d58"/><linearGradient id="d" y2="130.33" gradientUnits="userSpaceOnUse" y1="164.5" x2="52.538" x1="110.87"><stop stop-color="%23055524" stop-opacity=".4" offset="0"/><stop stop-color="%23055524" stop-opacity="0" offset=".33"/></linearGradient><path d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z" fill="url(%23d)"/></g><path clip-path="url(%23b)" fill-opacity=".15" d="M129.84 117.33l-.83-.48L90.62 184h1.15l38.1-66.64z" transform="translate(-7 -7)" fill="%23263238"/><g transform="translate(-7 -7)" clip-path="url(%23b)"><defs><path id="e" d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z"/></defs><clipPath id="f"><use width="100%" overflow="visible" xlink:href="%23e" height="100%"/></clipPath><g clip-path="url(%23f)"><path d="M96 56l34.65 60-38.88 68H184V56z" fill="%23ffcd40"/><linearGradient id="g" y2="114.13" gradientUnits="userSpaceOnUse" y1="49.804" x2="136.55" x1="121.86"><stop stop-color="%23EA6100" stop-opacity=".3" offset="0"/><stop stop-color="%23EA6100" stop-opacity="0" offset=".66"/></linearGradient><path d="M96 56l34.65 60-38.88 68H184V56z" fill="url(%23g)"/></g></g><g transform="translate(-7 -7)" clip-path="url(%23b)"><path d="M96 56l34.65 60-38.88 68H184V56z" fill="%23ffcd40"/><path d="M96 56l34.65 60-38.88 68H184V56z" fill="url(%23g)"/></g><g transform="translate(-7 -7)" clip-path="url(%23b)"><defs><path id="h" d="M96 56l34.65 60-38.88 68H184V56z"/></defs><clipPath id="i"><use width="100%" overflow="visible" xlink:href="%23h" height="100%"/></clipPath><g clip-path="url(%23i)"><path d="M21.97 8v108h39.39L96 56h88V8z" fill="%23db4437"/><path d="M21.97 8v108h39.39L96 56h88V8z" fill="url(%23c)"/></g></g><radialGradient id="j" gradientUnits="userSpaceOnUse" cy="55.948" cx="668.18" gradientTransform="translate(-576)" r="84.078"><stop stop-color="%233E2723" stop-opacity=".2" offset="0"/><stop stop-color="%233E2723" stop-opacity="0" offset="1"/></radialGradient><path clip-path="url(%23b)" d="M96 56v20.95L174.4 56z" transform="translate(-7 -7)" fill="url(%23j)"/><g transform="translate(-7 -7)" clip-path="url(%23b)"><defs><path id="k" d="M21.97 8v40.34L61.36 116 96 56h88V8z"/></defs><clipPath id="l"><use width="100%" overflow="visible" xlink:href="%23k" height="100%"/></clipPath><g clip-path="url(%23l)"><path d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z" fill="%230f9d58"/><path d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z" fill="url(%23d)"/></g></g><radialGradient id="m" gradientUnits="userSpaceOnUse" cy="48.52" cx="597.88" gradientTransform="translate(-576)" r="78.044"><stop stop-color="%233E2723" stop-opacity=".2" offset="0"/><stop stop-color="%233E2723" stop-opacity="0" offset="1"/></radialGradient><path clip-path="url(%23b)" d="M21.97 48.45l57.25 57.24L61.36 116z" transform="translate(-7 -7)" fill="url(%23m)"/><radialGradient id="n" gradientUnits="userSpaceOnUse" cy="96.138" cx="671.84" gradientTransform="translate(-576)" r="87.87"><stop stop-color="%23263238" stop-opacity=".2" offset="0"/><stop stop-color="%23263238" stop-opacity="0" offset="1"/></radialGradient><path clip-path="url(%23b)" d="M91.83 183.89l20.96-78.2L130.65 116z" transform="translate(-7 -7)" fill="url(%23n)"/><g transform="translate(-7 -7)" clip-path="url(%23b)"><circle cy="96" cx="96" r="40" fill="%23f1f1f1"/><circle cy="96" cx="96" r="32" fill="%234285f4"/></g><g transform="translate(-7 -7)" clip-path="url(%23b)"><path fill-opacity=".2" d="M96 55c-22.09 0-40 17.91-40 40v1c0-22.09 17.91-40 40-40h88v-1H96z" fill="%233e2723"/><path fill-opacity=".1" d="M130.6 116c-6.92 11.94-19.81 20-34.6 20-14.8 0-27.69-8.06-34.61-20h-.04L8 24.48v1L61.36 117h.04c6.92 11.94 19.81 20 34.61 20 14.79 0 27.68-8.05 34.6-20h.05v-1h-.06z" fill="%23fff"/><path opacity=".1" d="M97 56c-.17 0-.33.02-.5.03C118.36 56.3 136 74.08 136 96s-17.64 39.7-39.5 39.97c.17 0 .33.03.5.03 22.09 0 40-17.91 40-40s-17.91-40-40-40z" fill="%233e2723"/><path fill-opacity=".2" d="M131 117.33c3.4-5.88 5.37-12.68 5.37-19.96 0-4.22-.66-8.28-1.87-12.09.95 3.42 1.5 7.01 1.5 10.73 0 7.28-1.97 14.08-5.37 19.96l.02.04-38.88 68h1.16l38.09-66.64-.02-.04z" fill="%23fff"/></g><g transform="translate(-7 -7)" clip-path="url(%23b)"><path fill-opacity=".2" d="M96 9c48.43 0 87.72 39.13 87.99 87.5 0-.17.01-.33.01-.5 0-48.6-39.4-88-88-88S8 47.4 8 96c0 .17.01.33.01.5C8.28 48.13 47.57 9 96 9z" fill="%23fff"/><path fill-opacity=".15" d="M96 183c48.43 0 87.72-39.13 87.99-87.5 0 .17.01.33.01.5 0 48.6-39.4 88-88 88S8 144.6 8 96c0-.17.01-.33.01-.5C8.28 143.87 47.57 183 96 183z" fill="%233e2723"/></g><radialGradient id="o" gradientUnits="userSpaceOnUse" cy="32.014" cx="34.286" gradientTransform="translate(-7 -7)" r="176.75"><stop stop-color="%23fff" stop-opacity=".1" offset="0"/><stop stop-color="%23fff" stop-opacity="0" offset="1"/></radialGradient><circle cy="89" cx="89" r="88" fill="url(%23o)"/></svg>' alt="Google Chrome Logo" />
	</a>
	<a href="https://addons.mozilla.org/en-US/firefox/addon/getkontrast/" target="_blank">
		<svg class="zoom w-16 h-16" data-name="Firefox - Large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><radialGradient id="a" cx="-14480.522" cy="-8329.079" fx="-14509.28126515" r="450.875" gradientTransform="matrix(.762 .034 -.05 1.12 11560.893 10069.103)" gradientUnits="userSpaceOnUse"><stop offset=".045" stop-color="#ffea00"/><stop offset=".12" stop-color="#ffde00"/><stop offset=".254" stop-color="#ffbf00"/><stop offset=".429" stop-color="#ff8e00"/><stop offset=".769" stop-color="#ff272d"/><stop offset=".872" stop-color="#e0255a"/><stop offset=".953" stop-color="#cc2477"/><stop offset="1" stop-color="#c42482"/></radialGradient><radialGradient id="b" cx="-7529.669" cy="-7921.608" r="791.229" gradientTransform="translate(9921.963 9899.103) scale(1.225)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00ccda"/><stop offset=".22" stop-color="#0083ff"/><stop offset=".261" stop-color="#007af9"/><stop offset=".33" stop-color="#0060e8"/><stop offset=".333" stop-color="#005fe7"/><stop offset=".438" stop-color="#2639ad"/><stop offset=".522" stop-color="#401e84"/><stop offset=".566" stop-color="#4a1475"/></radialGradient><linearGradient id="c" x1="575.669" y1="731.188" x2="384.231" y2="104.96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000f43" stop-opacity=".4"/><stop offset=".485" stop-color="#001962" stop-opacity=".173"/><stop offset="1" stop-color="#002079" stop-opacity="0"/></linearGradient><radialGradient id="d" cx="-8260.94" cy="-6516.556" r="266.886" gradientTransform="matrix(1.219 .123 -.123 1.219 10296.265 9597.23)" gradientUnits="userSpaceOnUse"><stop offset=".003" stop-color="#ffea00"/><stop offset=".497" stop-color="#ff272d"/><stop offset="1" stop-color="#c42482"/></radialGradient><radialGradient id="e" cx="-8285.087" cy="-6772.468" r="445.678" gradientTransform="matrix(1.219 .123 -.123 1.219 10296.265 9597.23)" gradientUnits="userSpaceOnUse"><stop offset=".003" stop-color="#ffe900"/><stop offset=".157" stop-color="#ffaf0e"/><stop offset=".316" stop-color="#ff7a1b"/><stop offset=".472" stop-color="#ff4e26"/><stop offset=".621" stop-color="#ff2c2e"/><stop offset=".762" stop-color="#ff1434"/><stop offset=".892" stop-color="#ff0538"/><stop offset="1" stop-color="#ff0039"/></radialGradient><radialGradient id="f" cx="-8222.051" cy="-6359.332" r="408.958" gradientTransform="matrix(1.219 .123 -.123 1.219 10296.265 9597.23)" gradientUnits="userSpaceOnUse"><stop offset=".003" stop-color="#ff272d"/><stop offset=".497" stop-color="#c42482"/><stop offset=".986" stop-color="#620700"/></radialGradient><radialGradient id="g" cx="750.189" cy="396.041" fx="778.1665281" fy="382.21240501" r="782.18" gradientUnits="userSpaceOnUse"><stop offset=".156" stop-color="#ffea00"/><stop offset=".231" stop-color="#ffde00"/><stop offset=".365" stop-color="#ffbf00"/><stop offset=".541" stop-color="#ff8e00"/><stop offset=".763" stop-color="#ff272d"/><stop offset=".796" stop-color="#f92433"/><stop offset=".841" stop-color="#e91c45"/><stop offset=".893" stop-color="#cf0e62"/><stop offset=".935" stop-color="#b5007f"/></radialGradient><radialGradient id="h" cx="691.339" cy="3.289" r="923.615" gradientUnits="userSpaceOnUse"><stop offset=".279" stop-color="#ffea00"/><stop offset=".402" stop-color="#fd0"/><stop offset=".63" stop-color="#ffba00"/><stop offset=".856" stop-color="#ff9100"/><stop offset=".933" stop-color="#ff6711"/><stop offset=".994" stop-color="#ff4a1d"/></radialGradient><linearGradient id="i" x1="-8944.65" y1="-6677.742" x2="-8660.289" y2="-6750.226" gradientTransform="matrix(1.219 .123 -.123 1.219 10296.265 9597.23)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c42482" stop-opacity=".5"/><stop offset=".474" stop-color="#ff272d" stop-opacity=".5"/><stop offset=".486" stop-color="#ff2c2c" stop-opacity=".513"/><stop offset=".675" stop-color="#ff7a1a" stop-opacity=".72"/><stop offset=".829" stop-color="#ffb20d" stop-opacity=".871"/><stop offset=".942" stop-color="#ffd605" stop-opacity=".964"/><stop offset="1" stop-color="#ffe302"/></linearGradient><linearGradient id="j" x1="245.347" y1="-1082.012" x2="190.775" y2="-1221.859" gradientTransform="matrix(.995 .1 -.1 .995 -173.696 1313.941)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#891551" stop-opacity=".6"/><stop offset="1" stop-color="#c42482" stop-opacity="0"/></linearGradient><linearGradient id="k" x1="22.04" y1="718.827" x2="116.148" y2="825.714" gradientTransform="rotate(5.73 2610.90224439 2923.84488778)" gradientUnits="userSpaceOnUse"><stop offset=".005" stop-color="#891551" stop-opacity=".5"/><stop offset=".484" stop-color="#ff272d" stop-opacity=".5"/><stop offset="1" stop-color="#ff272d" stop-opacity="0"/></linearGradient><linearGradient id="l" x1="200.104" y1="904.616" x2="200.171" y2="829.835" gradientTransform="rotate(5.73 2610.90224439 2923.84488778)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c42482"/><stop offset=".083" stop-color="#c42482" stop-opacity=".81"/><stop offset=".206" stop-color="#c42482" stop-opacity=".565"/><stop offset=".328" stop-color="#c42482" stop-opacity=".362"/><stop offset=".447" stop-color="#c42482" stop-opacity=".204"/><stop offset=".562" stop-color="#c42482" stop-opacity=".091"/><stop offset=".673" stop-color="#c42482" stop-opacity=".023"/><stop offset=".773" stop-color="#c42482" stop-opacity="0"/></linearGradient><linearGradient id="m" x1="655.531" y1="38.12" x2="961.187" y2="721.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff14f"/><stop offset=".268" stop-color="#ffee4c"/><stop offset=".452" stop-color="#ffe643"/><stop offset=".612" stop-color="#ffd834"/><stop offset=".757" stop-color="#ffc41e"/><stop offset=".892" stop-color="#ffab02"/><stop offset=".902" stop-color="#ffa900"/><stop offset=".949" stop-color="#ffa000"/><stop offset="1" stop-color="#ff9100"/></linearGradient><linearGradient id="n" x1="715.885" y1="431.21" x2="571.098" y2="819.96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff8e00"/><stop offset=".04" stop-color="#ff8e00" stop-opacity=".858"/><stop offset=".084" stop-color="#ff8e00" stop-opacity=".729"/><stop offset=".13" stop-color="#ff8e00" stop-opacity=".628"/><stop offset=".178" stop-color="#ff8e00" stop-opacity=".557"/><stop offset=".227" stop-color="#ff8e00" stop-opacity=".514"/><stop offset=".282" stop-color="#ff8e00" stop-opacity=".5"/><stop offset=".389" stop-color="#ff8e00" stop-opacity=".478"/><stop offset=".524" stop-color="#ff8e00" stop-opacity=".416"/><stop offset=".676" stop-color="#ff8e00" stop-opacity=".314"/><stop offset=".838" stop-color="#ff8e00" stop-opacity=".172"/><stop offset="1" stop-color="#ff8e00" stop-opacity="0"/></linearGradient></defs><path d="M805.285 93.558c-23.947 27.884-35.1 90.639-10.818 154.256s61.5 49.8 84.7 114.673c30.623 85.6 16.369 200.589 16.369 200.589s36.814 106.609 62.468-6.633c56.783-212.703-152.719-410.506-152.719-462.885z" fill="url(#a)"/><path data-name="&lt;Path&gt;" d="M513.072 976.638c245.236 0 443.9-199.739 443.9-446.028S758.308 84.583 513.31 84.583 69.65 284.322 69.65 530.61c-.475 246.527 198.423 446.028 443.422 446.028z" fill="url(#b)"/><path d="M845.675 805.636a246.888 246.888 0 0 1-30.123 18.183 704 704 0 0 0 38.3-62.961c9.46-10.47 18.126-20.648 25.188-31.653 3.437-5.407 7.313-12.079 11.416-19.819 24.921-44.9 52.4-117.563 53.179-192.2v-.18c.018-1.837.029-3.675.014-5.515a257.6 257.6 0 0 0-5.712-55.748c.2 1.431.376 2.861.556 4.291-.221-1.1-.407-2.212-.644-3.314.366 2.034.66 4 .976 5.983 5.094 43.217 1.466 85.372-16.682 116.45-.286.454-.58.879-.869 1.323 9.41-47.234 12.558-99.387 2.088-151.6 0 0-4.187-25.383-35.376-102.441-17.952-44.353-49.833-80.716-78-107.207-24.69-30.546-47.114-51.045-59.475-64.06-25.821-27.189-36.643-47.569-41.087-60.867-3.853-1.932-53.135-49.807-57.05-51.631-21.511 33.352-89.162 137.675-56.981 235.146 14.584 44.172 51.467 90.017 90.067 115.736 1.695 1.936 22.969 25.042 33.086 77.157 10.446 53.842 4.954 95.855-16.546 157.983-25.286 54.505-90.067 108.388-150.724 113.9-129.676 11.781-177.149-65.108-177.149-65.108 46.336 18.525 97.568 14.65 128.724-4.556 31.4-19.425 50.394-33.827 65.81-28.148 15.2 5.653 27.3-10.756 16.442-27.767a78.5 78.5 0 0 0-79.4-34.573c-31.433 5.109-60.226 30.009-101.412 5.894a85.528 85.528 0 0 1-7.729-5.062c-2.715-1.785 8.826 2.717 6.133.688-8.015-4.354-22.2-13.842-25.88-17.217-.613-.562 6.219 2.179 5.606 1.616-38.51-31.712-33.7-53.134-32.49-66.57.969-10.749 7.964-24.523 19.751-30.11 5.693 3.107 9.24 5.479 9.24 5.479s-2.428-4.961-3.741-7.576c.46-.2.9-.147 1.358-.342 4.664 2.251 14.977 8.1 20.407 11.667 7.072 4.988 9.326 9.436 9.326 9.436s1.862-1.025.485-5.375c-.5-1.784-2.647-7.453-9.652-13.174l.438.049a81.2 81.2 0 0 1 11.867 8.241c1.975-7.181 5.527-14.679 4.746-28.092-.477-9.431-.257-11.873-1.919-15.515-1.488-3.128.834-4.348 3.418-1.1a32.826 32.826 0 0 0-2.208-7.4l.022-.244c3.225-11.236 68.248-40.461 72.981-43.877a67.355 67.355 0 0 0 19.132-20.8c3.617-5.763 6.337-13.848 7-26.112.355-8.844-3.759-14.734-69.507-21.618-17.981-1.771-28.531-14.8-34.526-26.823-1.094-2.59-2.209-4.937-3.325-7.282a58 58 0 0 1-2.558-8.431c10.749-30.873 28.81-56.977 55.367-76.7 1.447-1.318-5.782.338-4.336-.98 1.687-1.538 12.706-5.977 14.787-6.977 2.542-1.2-10.882-6.9-22.732-5.512-12.069 1.36-14.632 2.8-21.073 5.531 2.673-2.661 11.173-6.149 9.18-6.126-13.011 1.995-29.179 9.558-43 18.124a10.731 10.731 0 0 1 .835-4.348c-6.441 2.732-22.26 13.788-26.865 23.142a44.329 44.329 0 0 0 .266-5.4 84.483 84.483 0 0 0-13.195 13.818l-.241.219c-37.358-15.05-70.233-16.024-98.053-9.276-6.086-6.112-9.059-1.644-22.907-32.069-.941-1.832.722 1.809 0 0-2.278-5.9 1.389 7.872 0 0-23.284 18.372-53.92 39.193-68.626 53.89-.182.586 17.156-4.9 0 0-6.008 1.716-5.6 5.281-6.513 37.5-.22 2.443-.025 5.179-.223 7.378-11.748 14.968-19.749 27.643-22.775 34.211-15.193 26.18-31.926 66.992-48.146 131.551a334.364 334.364 0 0 1 25.784-50.401c-13.488 34.267-26.527 88.078-29.134 170.945a483.614 483.614 0 0 1 12.533-50.66 473.038 473.038 0 0 0 34.74 201.061c9.329 22.821 24.76 57.455 51.029 95.4 82.533 86.839 198.945 140.9 327.852 140.9 134.572.001 255.415-58.878 338.455-152.375z" fill="url(#c)"/><path d="M746.1 868.708c162.87-18.86 234.969-186.7 142.381-190-83.633-2.673-219.527 198.9-142.381 190z" fill="url(#d)"/><path d="M900.207 644.424c112.056-65.214 82.839-206.08 82.839-206.08s-43.246 50.238-72.625 130.32c-29.021 79.299-77.584 115.148-10.214 75.76z" fill="url(#e)"/><path d="M544.474 952.062c156.227 49.851 290.5-73.22 207.733-114.32-75.251-37.066-281.883 90.748-207.733 114.32z" fill="url(#f)"/><path d="M911.849 704.234c3.8-5.363 8.94-22.535 13.48-30.211 27.582-44.523 27.777-80.023 27.777-80.836 16.659-83.219 15.148-117.2 4.9-180.043-8.251-50.6-44.322-123.092-75.57-158-32.2-35.965-9.514-24.247-40.692-50.518-27.327-30.293-53.823-60.291-68.253-72.355C669.215 45.094 671.571 26.577 673.579 23.42c-.339.371-.837.922-1.472 1.643C670.872 20.14 670 16 670 16s-57 57-69 152c-7.834 62.021 15.383 126.676 49 168a381.367 381.367 0 0 0 59 58v-.026c25.4 36.477 39.38 81.489 39.38 129.909 0 121.244-98.341 219.531-219.652 219.531a220.455 220.455 0 0 1-49.134-5.519c-57.236-10.908-90.288-39.781-106.772-59.382-9.447-11.234-13.464-19.423-13.464-19.423 51.283 18.371 107.986 14.528 142.468-4.518 34.749-19.265 55.774-33.546 72.837-27.915 16.82 5.606 30.211-10.667 18.2-27.536-11.771-16.845-42.4-40.97-87.878-34.286-34.789 5.067-66.657 29.76-112.24 5.845a96.313 96.313 0 0 1-8.554-5.02c-3.005-1.771 9.768 2.695 6.787.682-8.87-4.318-24.573-13.728-28.643-17.074-.679-.557 6.883 2.161 6.2 1.6-42.621-31.449-37.3-52.693-35.959-66.018 1.073-10.66 8.814-24.32 21.859-29.86 6.3 3.081 10.226 5.433 10.226 5.433s-2.688-4.92-4.141-7.513c.509-.194.994-.145 1.5-.339 5.162 2.232 16.576 8.029 22.586 11.57 7.827 4.947 10.322 9.358 10.322 9.358s2.061-1.016.536-5.33c-.557-1.769-2.929-7.391-10.682-13.065l.485.049a90.851 90.851 0 0 1 13.134 8.173c2.186-7.121 6.118-14.557 5.253-27.859-.528-9.352-.284-11.775-2.124-15.386-1.647-3.1.924-4.312 3.782-1.088a30.038 30.038 0 0 0-2.444-7.343l.025-.242c3.57-11.143 75.535-40.125 80.773-43.513a70.31 70.31 0 0 0 21.175-20.63c4-5.715 7.014-13.733 7.748-25.895.246-5.48-1.441-9.817-20.5-13.965-11.439-2.49-29.136-4.913-56.433-7.474-19.9-1.756-31.577-14.676-38.212-26.6-1.211-2.569-2.445-4.9-3.68-7.222a53.108 53.108 0 0 1-2.831-8.36 158.47 158.47 0 0 1 61.279-76.063c1.6-1.308-6.4.335-4.8-.972 1.868-1.525 14.063-5.927 16.367-6.919 2.813-1.186-12.044-6.84-25.159-5.466-13.357 1.349-16.194 2.776-23.323 5.486 2.959-2.639 12.366-6.1 10.161-6.075-14.4 1.978-32.3 9.479-47.6 17.973a9.676 9.676 0 0 1 .924-4.312c-7.129 2.709-24.637 13.674-29.734 22.95a39.488 39.488 0 0 0 .294-5.354 88.678 88.678 0 0 0-14.6 13.7l-.267.218c-41.347-14.925-77.732-15.891-108.522-9.2-6.736-6.061-17.566-15.226-32.892-45.4-1.041-1.817-1.6 3.755-2.4 1.961-5.955-13.813-9.553-36.444-8.962-52.046 0 0-12.318 5.614-22.513 29.06-1.893 4.215-3.107 6.54-4.32 8.865-.558.678 1.265-7.7.974-7.244-1.772 3-6.356 7.192-8.371 12.618-1.384 4.021-3.325 6.273-4.564 11.288l-.291.46c-.1-1.478.367-6.081.027-5.137a236.1 236.1 0 0 0-12.308 29.841c-5.489 18.046-11.879 42.61-12.892 74.565-.244 2.423-.027 5.136-.247 7.317-13 14.844-21.858 27.413-25.207 33.928-16.807 25.971-35.327 66.445-53.28 130.468a319.143 319.143 0 0 1 28.538-49.989C52.316 418.253 37.885 471.618 35 553.8a438.522 438.522 0 0 1 13.872-50.24c-2.578 54.8 3.805 122.74 38.449 199.393 20.57 45.087 67.921 136.649 183.62 208.1l-.01.007s39.36 29.3 107.017 51.259c5 1.814 10.065 3.6 15.234 5.333-1.622-.655-3.191-1.344-4.715-2.052a484.883 484.883 0 0 0 138.8 20.4c175.18.149 226.846-70.2 226.846-70.2s-.182.137-.513.377q3.708-3.491 7.143-7.257c-27.639 26.1-90.715 27.832-114.3 25.949 40.223-11.813 66.691-21.806 118.175-41.519q9.037-3.35 18.482-7.64c.681-.3 1.368-.625 2.052-.936 1.249-.582 2.486-1.132 3.747-1.744a349.205 349.205 0 0 0 70.262-43.987c51.7-41.3 62.949-81.557 68.829-108.1-.82 2.544-3.375 8.475-5.17 12.316-13.315 28.482-42.841 45.959-74.908 60.948a688.993 688.993 0 0 0 42.388-62.434c10.467-10.383 13.733-26.625 21.549-37.539z" fill="url(#g)"/><path d="M848.921 802.982c21.08-23.241 40.01-49.824 54.349-79.968 36.9-77.582 93.952-206.58 49.018-341.306C916.775 275.225 868.016 217 806.107 160.122 705.563 67.756 677.482 26.521 677.482 2c0 0-116.089 129.409-65.742 264.381S765.2 396.405 833.419 537.255C913.694 703 768.47 883.869 648.375 934.493c7.353-1.633 266.97-60.383 280.614-208.882-.309 2.731-6.159 43.803-80.068 77.371z" fill="url(#h)"/><path d="M512.592 321.373c.393-8.77-4.156-14.66-76.682-21.463-29.839-2.755-41.265-30.334-44.748-41.941-10.61 27.565-14.991 56.49-12.636 91.477 1.61 22.92 17.009 47.521 24.37 61.965 0 0 1.636-2.126 2.391-2.912 13.861-14.431 71.936-36.419 77.392-39.541 6.014-3.799 28.903-20.523 29.913-47.585z" fill="url(#i)"/><path d="M193.314 158.471c-1.041-1.818-1.6 3.754-2.4 1.961-5.955-13.813-9.578-36.2-8.72-52.022 0 0-12.318 5.614-22.513 29.06-1.893 4.215-3.107 6.54-4.32 8.865-.558.678 1.265-7.7.974-7.244-1.771 3-6.355 7.192-8.346 12.375-1.651 4.239-3.349 6.515-4.613 11.772-.389 1.429.392-6.323.052-5.379-23.711 45.825-28.237 115.114-25.738 112.184 50.478-53.9 108.325-66.683 108.325-66.683-6.155-4.534-19.528-17.625-32.7-44.889z" fill="url(#j)"/><path d="M384.844 722.1c-69.724-29.769-148.992-71.755-146-167.138 4.075-125.619 117.145-100.791 117.145-100.791-4.267 1.039-15.675 9.162-19.718 17.82-4.273 10.827-12.069 35.276 11.551 60.9 37.089 40.192-76.2 95.356 98.663 199.567 4.41 2.4-40.991-1.43-61.639-10.358z" fill="url(#k)"/><path d="M360.074 659.5c49.442 17.207 107.04 14.189 141.523-4.858 23.085-12.851 52.7-33.434 70.922-28.353-15.777-6.236-27.726-9.15-42.1-9.862-2.448 0-5.382-.052-8.048-.32a136.228 136.228 0 0 0-15.757.863c-8.9.818-18.766 6.433-27.735 5.532-.485-.049 8.7-3.774 7.953-3.605-4.752.991-9.915 1.205-15.37 1.881-3.467.386-6.449.82-9.891.963-102.982 8.733-190.017-55.813-190.017-55.813-7.408 24.95 33.166 74.3 88.521 93.572z" fill="url(#l)"/><path d="M848.738 803.646C952.9 701.376 1005.6 577.061 983.321 437.627c0 0 8.9 71.5-24.848 144.628 16.213-71.393 18.1-160.114-24.975-251.988-57.493-122.631-152.048-187.158-188.147-214.078C690.656 75.4 667.983 33.87 667.574 25.3c-16.339 33.477-65.766 148.2-5.31 247 56.64 92.564 145.865 120.039 208.328 204.947 115.075 156.42-21.854 326.399-21.854 326.399z" fill="url(#m)"/><path d="M833.814 537.551C797.412 462.35 751.978 429.55 709 394c5 7 6.232 9.473 9 14 37.827 40.316 93.607 138.656 53.11 262.107-76.229 232.375-381.143 122.95-413.11 92.212 12.932 134.489 238.036 198.845 384.6 111.63C826 795 893.468 660.788 833.814 537.551z" fill="url(#n)"/></svg>
	</a>
	</div>
)

const BulletPoint = ({ on }) => ( 
	on?<svg class="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs/><g id="Layer_2" data-name="Layer 2"><g id="radio-button-on"><g id="radio-button-on-2" data-name="radio-button-on"><path class="cls-2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path class="cls-2" d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"/></g></g></g></svg>
	:<svg class="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z" data-name="radio-button-off"/></g></svg>
)
