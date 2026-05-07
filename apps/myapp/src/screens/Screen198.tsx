import { Pressable, Text, View } from 'react-native';

import { copy198 } from '../generated/copy/copy198';
import { layout198 } from '../generated/layouts/layout198';
import { palette198 } from '../generated/palettes/palette198';

export function Screen198() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout198.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy198.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy198.detail} / {palette198.name}
			</Text>
		</View>
	);
}
