import { Pressable, Text, View } from 'react-native';

import { copy276 } from '../generated/copy/copy276';
import { layout276 } from '../generated/layouts/layout276';
import { palette276 } from '../generated/palettes/palette276';

export function Screen276() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout276.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy276.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy276.detail} / {palette276.name}
			</Text>
		</View>
	);
}
