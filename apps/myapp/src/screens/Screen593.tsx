import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy593 } from '../generated/copy/copy593';
import { layout593 } from '../generated/layouts/layout593';
import { palette593 } from '../generated/palettes/palette593';

const RuntimeView593 = withUniwind(View);

export function Screen593() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView593 styleClassName={layout593.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy593.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy593.detail} / {palette593.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
