import { Pressable, Text, View } from 'react-native';

import { copy20 } from '../generated/copy/copy20';
import { layout20 } from '../generated/layouts/layout20';
import { palette20 } from '../generated/palettes/palette20';

export function Screen20() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout20.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy20.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy20.detail} / {palette20.name}
			</Text>
		</View>
	);
}
