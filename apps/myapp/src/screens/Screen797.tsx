import { Pressable, Text, View } from 'react-native';

import { copy797 } from '../generated/copy/copy797';
import { layout797 } from '../generated/layouts/layout797';
import { palette797 } from '../generated/palettes/palette797';

export function Screen797() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout797.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy797.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy797.detail} / {palette797.name}
			</Text>
		</View>
	);
}
