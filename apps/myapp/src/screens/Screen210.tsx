import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy210 } from '../generated/copy/copy210';
import { layout210 } from '../generated/layouts/layout210';
import { palette210 } from '../generated/palettes/palette210';

const RuntimeView210 = withUniwind(View);

export function Screen210() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView210 styleClassName={layout210.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy210.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy210.detail} / {palette210.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
