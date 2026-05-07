import { Pressable, Text, View } from 'react-native';

import { copy452 } from '../generated/copy/copy452';
import { layout452 } from '../generated/layouts/layout452';
import { palette452 } from '../generated/palettes/palette452';

export function Screen452() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout452.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy452.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy452.detail} / {palette452.name}
			</Text>
		</View>
	);
}
