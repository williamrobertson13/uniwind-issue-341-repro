import { Pressable, Text, View } from 'react-native';

import { copy595 } from '../generated/copy/copy595';
import { layout595 } from '../generated/layouts/layout595';
import { palette595 } from '../generated/palettes/palette595';

export function Screen595() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout595.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy595.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy595.detail} / {palette595.name}
			</Text>
		</View>
	);
}
