import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy632 } from '../generated/copy/copy632';
import { layout632 } from '../generated/layouts/layout632';
import { palette632 } from '../generated/palettes/palette632';

const RuntimeView632 = withUniwind(View);

export function Screen632() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView632 styleClassName={layout632.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy632.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy632.detail} / {palette632.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
