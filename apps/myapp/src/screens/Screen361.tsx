import { Pressable, Text, View } from 'react-native';

import { copy361 } from '../generated/copy/copy361';
import { layout361 } from '../generated/layouts/layout361';
import { palette361 } from '../generated/palettes/palette361';

export function Screen361() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout361.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy361.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy361.detail} / {palette361.name}
			</Text>
		</View>
	);
}
