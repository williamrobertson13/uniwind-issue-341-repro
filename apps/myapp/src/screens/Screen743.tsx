import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy743 } from '../generated/copy/copy743';
import { layout743 } from '../generated/layouts/layout743';
import { palette743 } from '../generated/palettes/palette743';

const RuntimeView743 = withUniwind(View);

export function Screen743() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView743 styleClassName={layout743.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy743.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy743.detail} / {palette743.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
