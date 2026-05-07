import { Pressable, Text, View } from 'react-native';

import { copy461 } from '../generated/copy/copy461';
import { layout461 } from '../generated/layouts/layout461';
import { palette461 } from '../generated/palettes/palette461';

export function Screen461() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout461.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy461.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy461.detail} / {palette461.name}
			</Text>
		</View>
	);
}
