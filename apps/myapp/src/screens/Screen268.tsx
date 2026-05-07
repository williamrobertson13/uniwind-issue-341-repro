import { Pressable, Text, View } from 'react-native';

import { copy268 } from '../generated/copy/copy268';
import { layout268 } from '../generated/layouts/layout268';
import { palette268 } from '../generated/palettes/palette268';

export function Screen268() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout268.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy268.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy268.detail} / {palette268.name}
			</Text>
		</View>
	);
}
