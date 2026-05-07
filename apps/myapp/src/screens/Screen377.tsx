import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy377 } from '../generated/copy/copy377';
import { layout377 } from '../generated/layouts/layout377';
import { palette377 } from '../generated/palettes/palette377';

const RuntimeView377 = withUniwind(View);

export function Screen377() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView377 styleClassName={layout377.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy377.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy377.detail} / {palette377.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
