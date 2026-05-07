import { Pressable, Text, View } from 'react-native';

import { copy677 } from '../generated/copy/copy677';
import { layout677 } from '../generated/layouts/layout677';
import { palette677 } from '../generated/palettes/palette677';

export function Screen677() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout677.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy677.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy677.detail} / {palette677.name}
			</Text>
		</View>
	);
}
