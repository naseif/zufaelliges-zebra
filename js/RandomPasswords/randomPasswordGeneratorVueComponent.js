Vue.component('password-viewer', {
    props: ["password"],
    methods :{
        copyToClipboard : function(event){
            navigator.clipboard.writeText(this.password)
        } 
    },
    template: `
    <div class="password-viewer">
        <pre style="float:left">{{password}}</pre><button style="float:right" v-on:click="copyToClipboard">copy</button>
        <br style="clear:both">
    </div>
    `
})

Vue.component('password-generator', {
    data: function () {
      return {
        passwords: [],
        passwordLength : 8
      }
    },
    methods :{
        generateButtonClick : function(event){
            this.passwords = GenerateABunchOfRandomPasswords(10, this.passwordLength);
        } 
    },
    template: `
        <div class="password-generator">
            <div class="glassbox">
                Password Generator
            </div>
            <div class="result-box"> 
                <br>
                <password-viewer v-for="password in passwords" v-bind:key="password" v-bind:password="password"></password-viewer>
            </div>
            <label>Password Length (8-16)</label>
            <div class="row">
                <div class="col-sm">
                <input type="number" class="glassbox" v-model="passwordLength" value="8" min="8" max="18"> 
                </div>
                <div class="col-sm">
                <input class="btn glassbox btn-gen" type="button" v-on:click="generateButtonClick">
                </div>
            </div>
        </div>
        `
})