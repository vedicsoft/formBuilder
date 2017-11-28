import control from '../control';
import * as $ from 'jquery';
/**
 * Room booking class
 * Output an autocomplete form element
 */

/**
 * Created by channa on 11/23/17.
 */
export default class controlRoomBooking extends control {

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return {Object} DOM Element to be injected into the form.
     */
    build() {
        let {values, type, ...data} = this.config;

        const dateEvents = {
            input: (evt) => {

                    $.ajax({
                        url:'myAjax.php',
                        success: function (response) {
                            alert('test success');
                        },
                        error: function (error) {
                            alert('test failed'+error.toString());
                        },
                        });
            }
        };

        let startDateAttrs = Object.assign({}, data,
            {
                id: `${data.id}-date1`,
                events: dateEvents,
                type:'date'
            });

        let endDateAttrs = Object.assign({}, data,
            {
                id: `${data.id}-date2`,
                events: dateEvents,
                type:'date'
            });
        let test = Object.assign({}, data,
            {
                id: `${data.id}-test`,
                events: dateEvents,
                type:'input'
            });
        const field = [
            this.markup('input', null, startDateAttrs),
            this.markup('input', null, endDateAttrs),
            this.markup('input', null, test)
        ];

        return field;
    }

    /**
     * seting icons for the controller element
     *
     */
    static get definition() {
        return {
            icon: '🌟'
        }
    }


    /**
     * When the element is rendered into the DOM, execute the following code to initialise it
     * @param {Object} evt - event
     */
    onRender(evt) {
    }
}

control.register('roombooking', controlRoomBooking);

