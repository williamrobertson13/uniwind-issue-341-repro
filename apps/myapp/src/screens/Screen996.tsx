import { Pressable, Text, View } from 'react-native';

import { copy996 } from '../generated/copy/copy996';
import { layout996 } from '../generated/layouts/layout996';
import { palette996 } from '../generated/palettes/palette996';

export function Screen996() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout996.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy996.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy996.detail} / {palette996.name}
			</Text>
		</View>
	);
}
