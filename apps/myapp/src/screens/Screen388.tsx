import { Pressable, Text, View } from 'react-native';

import { copy388 } from '../generated/copy/copy388';
import { layout388 } from '../generated/layouts/layout388';
import { palette388 } from '../generated/palettes/palette388';

export function Screen388() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout388.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy388.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy388.detail} / {palette388.name}
			</Text>
		</View>
	);
}
