import { Pressable, Text, View } from 'react-native';

import { copy564 } from '../generated/copy/copy564';
import { layout564 } from '../generated/layouts/layout564';
import { palette564 } from '../generated/palettes/palette564';

export function Screen564() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout564.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy564.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy564.detail} / {palette564.name}
			</Text>
		</View>
	);
}
