import { Pressable, Text, View } from 'react-native';

import { copy3 } from '../generated/copy/copy3';
import { layout3 } from '../generated/layouts/layout3';
import { palette3 } from '../generated/palettes/palette3';

export function Screen3() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout3.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy3.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy3.detail} / {palette3.name}
			</Text>
		</View>
	);
}
