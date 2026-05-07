import { Pressable, Text, View } from 'react-native';

import { copy829 } from '../generated/copy/copy829';
import { layout829 } from '../generated/layouts/layout829';
import { palette829 } from '../generated/palettes/palette829';

export function Screen829() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout829.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy829.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy829.detail} / {palette829.name}
			</Text>
		</View>
	);
}
