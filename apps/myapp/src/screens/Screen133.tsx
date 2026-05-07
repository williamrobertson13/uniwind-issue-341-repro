import { Pressable, Text, View } from 'react-native';

import { copy133 } from '../generated/copy/copy133';
import { layout133 } from '../generated/layouts/layout133';
import { palette133 } from '../generated/palettes/palette133';

export function Screen133() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout133.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy133.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy133.detail} / {palette133.name}
			</Text>
		</View>
	);
}
