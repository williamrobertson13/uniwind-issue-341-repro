import { Pressable, Text, View } from 'react-native';

import { copy948 } from '../generated/copy/copy948';
import { layout948 } from '../generated/layouts/layout948';
import { palette948 } from '../generated/palettes/palette948';

export function Screen948() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout948.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy948.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy948.detail} / {palette948.name}
			</Text>
		</View>
	);
}
