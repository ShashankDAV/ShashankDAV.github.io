MDTopAppBar:
                title : 'ShashankDAV'
                left_action_items : [['menu' , lambda x = '1' : drawer.set_state('open')]]
                elevation : -1
                pos_hint : {'top':1}
            MDBottomAppBar:
                MDTopAppBar:
                    type : 'bottom'
                    icon : 'home'
                    elevation : 0
                   on_action_button : app.root.ids.manager.current = 'home'
                   pos_hint : {'top':1}
            MDLabel:
                text : 'Hello , This is updates page'
                pos_hint : {'center_x':0.5 , 'center_y':0.5}
                bold : True
            MDRectangleFlatButton:
                text : 'Button'
                pos_hint : {'center_x':0.75 , 'center_y':0.5}
