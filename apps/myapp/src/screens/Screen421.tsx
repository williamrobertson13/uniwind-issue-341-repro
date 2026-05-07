import { Pressable, Text, View } from 'react-native';

import { copy421 } from '../generated/copy/copy421';
import { layout421 } from '../generated/layouts/layout421';
import { palette421 } from '../generated/palettes/palette421';

export function Screen421() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout421.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy421.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy421.detail} / {palette421.name}
			</Text>
		</View>
	);
}
