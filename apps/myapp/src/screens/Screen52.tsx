import { Pressable, Text, View } from 'react-native';

import { copy52 } from '../generated/copy/copy52';
import { layout52 } from '../generated/layouts/layout52';
import { palette52 } from '../generated/palettes/palette52';

export function Screen52() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout52.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy52.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy52.detail} / {palette52.name}
			</Text>
		</View>
	);
}
