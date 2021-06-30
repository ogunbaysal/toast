import config from './config'
import createObserver from "./helpers/createObserver";
import extendObject from "./helpers/extendObject";
class toast {
    constructor() {
        this.defaults = config;
        this.observer = createObserver();
        this.initWrapper();
        this.types = {
                white: '',
                success: 'bg-success text-white',
                warning: 'bg-warning text-black',
                danger: 'bg-danger text-white',
                error: 'bg-danger text-white'
            };
    }
    initWrapper() {
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('id', 'toastPlacement');
        this.wrapper.classList.add('toast-wrapper');
        document.body.append(this.wrapper);
    }
    success(message, params = {}) {
        params.text = message;
        return this.notify(params);
    }
    notify(params = {}) {
        params = extendObject(this.defaults, params);
        let template = document.createElement('div');
        template.innerHTML = params.tpl(this, params);
        template = template.getElementsByClassName('toast')[0];
        template.classList.add('slideInDown');
        template.classList.add('animated');
        template.classList.add('faster');
        let removeClasses = () => {
            template.classList.remove('slideInDown');
            template.classList.remove('animated');
            template.classList.remove('faster');
        }
        ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend'].forEach(function(e) {
            document.addEventListener(e, removeClasses);
        });
        this.wrapper.appendChild(template);
        let closeFunc = () => {
            this.wrapper.removeChild(template);
        }
        setTimeout(function() {
            template.classList.add('fadeOutDown');
            template.classList.add('animated');
            template.classList.add('faster');
            ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend'].forEach(function(e) {
                document.addEventListener(e, closeFunc);
            });
        }, params.interval);
    }

}
export default toast;
