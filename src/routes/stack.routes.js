import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cadastro from '../components/Cadastro';
import Entrar from '../components/Entrar';
import Mapa from '../components/Mapa';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return(
        <Navigator>
            <Screen
                name = 'Entrar'
                component={Entrar}
            />
            <Screen
                name='Cadastro'
                component={Cadastro}
            />
            <Screen
                name='Mapa'
                component={Mapa}
            />
        </Navigator>
    )
}