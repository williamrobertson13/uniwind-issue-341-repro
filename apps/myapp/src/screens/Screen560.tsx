import { Pressable, Text, View } from 'react-native';

import { copy560 } from '../generated/copy/copy560';
import { layout560 } from '../generated/layouts/layout560';
import { palette560 } from '../generated/palettes/palette560';

export function Screen560() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout560.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy560.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy560.detail} / {palette560.name}
			</Text>
		</View>
	);
}
