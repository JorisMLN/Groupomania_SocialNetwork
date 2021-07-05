import Vueditor from 'vueditor'

export default {
    config = {
        toolbar: [
          'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor'
        ],
        fontName: [
          {val: 'arial black'}, 
          {val: 'times new roman'}, 
          {val: 'Courier New'}
        ],
        fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
        uploadUrl: ''
    },
    
}

Vue.use(Vueditor, config);