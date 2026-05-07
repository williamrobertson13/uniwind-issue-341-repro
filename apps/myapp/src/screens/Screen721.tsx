import { Pressable, Text, View } from 'react-native';

import { copy721 } from '../generated/copy/copy721';
import { layout721 } from '../generated/layouts/layout721';
import { palette721 } from '../generated/palettes/palette721';

export function Screen721() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout721.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy721.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy721.detail} / {palette721.name}
			</Text>
		</View>
	);
}
