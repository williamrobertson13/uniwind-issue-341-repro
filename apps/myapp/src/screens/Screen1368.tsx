import { Pressable, Text, View } from 'react-native';

import { copy1368 } from '../generated/copy/copy1368';
import { layout1368 } from '../generated/layouts/layout1368';
import { palette1368 } from '../generated/palettes/palette1368';

export function Screen1368() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1368.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1368.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1368.detail} / {palette1368.name}
			</Text>
		</View>
	);
}
