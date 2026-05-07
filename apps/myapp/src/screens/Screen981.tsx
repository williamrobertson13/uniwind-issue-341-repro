import { Pressable, Text, View } from 'react-native';

import { copy981 } from '../generated/copy/copy981';
import { layout981 } from '../generated/layouts/layout981';
import { palette981 } from '../generated/palettes/palette981';

export function Screen981() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout981.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy981.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy981.detail} / {palette981.name}
			</Text>
		</View>
	);
}
