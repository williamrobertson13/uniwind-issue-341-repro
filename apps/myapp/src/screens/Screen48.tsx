import { Pressable, Text, View } from 'react-native';

import { copy48 } from '../generated/copy/copy48';
import { layout48 } from '../generated/layouts/layout48';
import { palette48 } from '../generated/palettes/palette48';

export function Screen48() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout48.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy48.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy48.detail} / {palette48.name}
			</Text>
		</View>
	);
}
