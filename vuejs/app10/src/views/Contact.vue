<template>
   <div class="contact">
       <div class="container">
		<div class="row">
			<div class="col-md-4 center">
				<ContactComponent msg="left"/>
			</div>
			<div class="col-md-4 center">
				<ContactComponent num="center"/>
			</div>
			<div class="col-md-4 center">
				<ContactComponent yrd="right"/>
			</div>
		</div>
      </div>
   </div>
</template>

<script>
// @ is an alias to /src
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  name: 'contact',
  components: {
    ContactComponent
  }
}
</script>