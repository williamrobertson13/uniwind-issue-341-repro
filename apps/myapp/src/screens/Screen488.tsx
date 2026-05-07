import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy488 } from '../generated/copy/copy488';
import { layout488 } from '../generated/layouts/layout488';
import { palette488 } from '../generated/palettes/palette488';

const RuntimeView488 = withUniwind(View);

export function Screen488() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView488 styleClassName={layout488.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy488.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy488.detail} / {palette488.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
