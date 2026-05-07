import { Pressable, Text, View } from 'react-native';

import { copy1220 } from '../generated/copy/copy1220';
import { layout1220 } from '../generated/layouts/layout1220';
import { palette1220 } from '../generated/palettes/palette1220';

export function Screen1220() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1220.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1220.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1220.detail} / {palette1220.name}
			</Text>
		</View>
	);
}
