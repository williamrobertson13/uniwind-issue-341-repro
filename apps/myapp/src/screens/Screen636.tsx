import { Pressable, Text, View } from 'react-native';

import { copy636 } from '../generated/copy/copy636';
import { layout636 } from '../generated/layouts/layout636';
import { palette636 } from '../generated/palettes/palette636';

export function Screen636() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout636.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy636.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy636.detail} / {palette636.name}
			</Text>
		</View>
	);
}
