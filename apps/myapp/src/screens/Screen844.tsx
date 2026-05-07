import { Pressable, Text, View } from 'react-native';

import { copy844 } from '../generated/copy/copy844';
import { layout844 } from '../generated/layouts/layout844';
import { palette844 } from '../generated/palettes/palette844';

export function Screen844() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout844.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy844.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy844.detail} / {palette844.name}
			</Text>
		</View>
	);
}
