import { Pressable, Text, View } from 'react-native';

import { copy732 } from '../generated/copy/copy732';
import { layout732 } from '../generated/layouts/layout732';
import { palette732 } from '../generated/palettes/palette732';

export function Screen732() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout732.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy732.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy732.detail} / {palette732.name}
			</Text>
		</View>
	);
}
