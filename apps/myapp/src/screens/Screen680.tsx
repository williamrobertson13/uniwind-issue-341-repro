import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy680 } from '../generated/copy/copy680';
import { layout680 } from '../generated/layouts/layout680';
import { palette680 } from '../generated/palettes/palette680';

const RuntimeView680 = withUniwind(View);

export function Screen680() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView680 styleClassName={layout680.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy680.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy680.detail} / {palette680.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
