import { Pressable, Text, View } from 'react-native';

import { copy821 } from '../generated/copy/copy821';
import { layout821 } from '../generated/layouts/layout821';
import { palette821 } from '../generated/palettes/palette821';

export function Screen821() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout821.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy821.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy821.detail} / {palette821.name}
			</Text>
		</View>
	);
}
