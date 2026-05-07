import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy336 } from '../generated/copy/copy336';
import { layout336 } from '../generated/layouts/layout336';
import { palette336 } from '../generated/palettes/palette336';

const RuntimeView336 = withUniwind(View);

export function Screen336() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView336 styleClassName={layout336.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy336.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy336.detail} / {palette336.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
