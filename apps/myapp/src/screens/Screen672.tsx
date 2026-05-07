import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy672 } from '../generated/copy/copy672';
import { layout672 } from '../generated/layouts/layout672';
import { palette672 } from '../generated/palettes/palette672';

const RuntimeView672 = withUniwind(View);

export function Screen672() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView672 styleClassName={layout672.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy672.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy672.detail} / {palette672.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
